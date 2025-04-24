import GetImageUrl from './GetImageUrl.jsx';
import Elements from './Elements.jsx';
import Carrousel from './Carrousel.jsx';
import ProjectCounter from './ProjectCounter.jsx';

export function Block({ data }) {
  switch (data.className) {
    case 'message':
      return (
        <div className={'block ' + data.className + '-' + data.class}>
          <p>{data.content}</p>
        </div>
      );
    case 'profile':
    return (
      <div className={'block message-' + data.className}>
        <p>{data.top}</p>
        <p>{data.middle}</p>
        <p>{data.bottom}</p>
      </div>
    );
    case 'theme':
      return (
        <div className={'block ' + data.className}>
          <img src={GetImageUrl(data.image)}/>
        </div>
      );
    case 'techStack':
      return (
        <div className={'block ' + data.className}>
          {Carrousel({ projects: data.elements, isImage: false })}
        </div>
      );
    case 'projects-carrousel':
      return (
        <div className={'block ' + data.className}>
          {Carrousel({ projects: data.elements, isImage: true })}
        </div>
      );
    case 'mobile-projects-carrousel':
      return (
        <div className={'block ' + data.className}>
          {Carrousel({ projects: data.elements, isImage: true })}
        </div>
      );
    case 'photo':
      return (
        <div className={'block ' + data.className}>
          <img src={GetImageUrl(data.content)} />
        </div>
      );
    case 'resume':
      return (
        <div className={'block ' + data.className}>
          <a href={data.link}>Resume</a>
          <img src={GetImageUrl(data.image)} />
        </div>
      );
    case 'network':
      return (
        <div className={'block ' + data.className}>
          {Elements(data.elements)}
        </div>
      );
    case 'counter-projects':
      return (
        <div className={'block ' + data.className}>
          {ProjectCounter(data)}
          <div className={data.className + '-label'}>
            <p>Projects</p>
          </div>
        </div>
      );
    default:
      return <div className="block">default</div>;
  }
}

export default Block;
