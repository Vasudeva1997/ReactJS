import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UiActions } from "../../store/uiSlice";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(UiActions.resetNotification());
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
