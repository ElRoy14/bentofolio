import GetImageUrl from './GetImageUrl.jsx';

export function Elements(networks) {
  const listItems = networks.map((net) => (
    <li key={net.id}>
      <a href={net.link} className={net.className}>
        <img src={GetImageUrl(net.image)} />
      </a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default Elements;
