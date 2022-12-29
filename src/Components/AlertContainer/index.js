import Alert from "../Alert";
import { useSelector } from "react-redux";

export default function AlertContainer() {
  //const { toasts } = useToastStateContext();
  const toasts = useSelector(state => state.toast?.toasts);
  return (
    <div className="absolute w-full z-50 top-0">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast) => (
            <Alert
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}