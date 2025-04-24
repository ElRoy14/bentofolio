import GetImageUrl from './GetImageUrl';

export function Grid({ techs, handleClick, position }) {
  const techList = techs[position].map((tech) => (
    <li key={tech.id}>
      <div onClick={handleClick} className={tech.className}>
        <img src={GetImageUrl(tech.image)} />
      </div>
    </li>
  ));

  return <ul className="grid">{techList}</ul>;
}

export default Grid;
