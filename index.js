const Notification = (props) => {
  const { notificationType, iconUrl, messageText } = props;

  return (
    <div className={`notification ${notificationType}`}>
      <img className="message-icon" src={iconUrl} />
      <p className="message-text">{messageText}</p>
    </div>
  );
};

const element = (
  <div className="background-container">
    <div className="info-container">
      <h1 className="heading">Notifications</h1>
      <div className="notifications-container">
        <Notification
          notificationType="inform-message-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          messageText="information Message"
        />
        <Notification
          notificationType="success-message-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          messageText="Success Message"
        />
        <Notification
          notificationType="warning-message-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          messageText="Warning Message"
        />
        <Notification
          notificationType="danger-message-container"
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          messageText="Danger Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
