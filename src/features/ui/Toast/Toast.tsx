import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface Toast {
  id: number;
  message: ReactNode;
}

const DEFAULT_TOAST_DURATION_IN_MS = 5000;

export const ToastContainer = () => {
  const toastCtx = useContext(ToastContext);
  if (!toastCtx) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { toastList } = toastCtx;
  return (
    <div className="fixed max-h-screen mx-auto flex flex-col items-center left-[50%] right-[50%]">
      {toastList.map((toast, index) => {
        const handleRemove = () => {
          toastCtx.removeToast(toast.id);
        };

        return (
          <Toast
            key={index}
            message={toast.message}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

interface ToastContextValues {
  showToast: (message: ReactNode) => void;
  removeToast: (id: number) => void;
  toastList: Toast[];
}
export const ToastContext = createContext<ToastContextValues | null>(null);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastList, setToastList] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: ReactNode) => {
      const toast = {
        id: Date.now(),
        message,
      };

      setToastList([...toastList, toast]);

      setTimeout(() => {
        removeToast(toast.id);
      }, DEFAULT_TOAST_DURATION_IN_MS);
    },
    [toastList]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToastList((prev) => prev.filter((toast) => toast.id !== id));
    },
    [toastList]
  );

  const api = useMemo(() => {
    return {
      showToast,
      removeToast,
      toastList,
    };
  }, [removeToast, showToast, toastList]);

  return <ToastContext.Provider value={api}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  const toastCtx = useContext(ToastContext);
  if (!toastCtx) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { showToast } = toastCtx;

  return { showToast };
};

const Toast = ({
  message,
  handleRemove,
}: {
  message: ReactNode;
  handleRemove: () => void;
}) => {
  return (
    <div className="flex w-96 shadow-md border border-[#DDE1E4] p-4 z-10 bg-white mt-4">
      <div className="flex flex-col">
        <div className="text-[#2D3744] font-bold">Toast Title</div>
        <div className="text-xs">{message}</div>
      </div>
      <button
        onClick={handleRemove}
        className="ml-auto font-bold border border-[#DADCE0] text-[#2D3744] p-2"
      >
        Undo
      </button>
    </div>
  );
};
