export function XFollowCard({ username, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Texto"
          src={'https://unavatar.io/' + { username }}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{username}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
