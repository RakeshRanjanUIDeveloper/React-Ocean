import React, { useContext, useState } from 'react';
import { MailContext } from './MailProvider';

const Inbox = () => {
  const { mailData } = useContext(MailContext);
  const unreadCount = mailData ? mailData.filter((mail) => mail.unread).length : 0;

  const [showUnread, setShowUnread] = useState(false);
  const [showStarred, setShowStarred] = useState(false);

  const filteredMails = mailData.filter((mail) => {
    if (showUnread && showStarred) return mail.unread && mail.isStarred;
    if (showUnread) return mail.unread;
    if (showStarred) return !mail.isStarred;
    return true;
  });

  const handleUnreadMails = (e) => {
    setShowUnread(e.target.checked);
  };

  const handleStarredMails = (e) => {
    setShowStarred(e.target.checked);
  };

  return (
    <React.Fragment>
      <div className="checkbox-filter">
        <h2>Filter</h2>
        <input type="checkbox" checked={showUnread} onChange={handleUnreadMails} />
        <label>Show Unread mails</label>
        <input type="checkbox" checked={showStarred} onChange={handleStarredMails} />
        <label>Show Starred mails</label>
      </div>

      <h2>Unread: {unreadCount}</h2>
      <div className="mail-container">
        {filteredMails.map((mail) => (
          <div className="mail" key={mail.mId}>
            <h2>Subject: {mail.subject}</h2>
            <p>{mail.content}</p>

            <div className="mail-buttons">
              <a href="#">View Details</a>
              <button>{mail.isStarred ? 'Unstar' : 'Star'}</button>
              <button>Delete</button>
              <button>{mail.unread ? 'Unread' : 'Read'}</button>
              <button>Report Spam</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Inbox;
