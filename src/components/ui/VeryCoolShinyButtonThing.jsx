import { cn } from '../../lib/utils';
import './VeryCoolShinyButtonThing.css'; 

const VeryCoolShinyButtonThing = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cn('cool-button', className)}>
      {children}
      <span className="cool-button-border"></span>
    </button>
  );
};

export default VeryCoolShinyButtonThing;