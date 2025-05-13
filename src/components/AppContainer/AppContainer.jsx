import './AppContainer.scss';

export const AppContainer = ({ children }) => {
  return <div className="app-container flex flex-col">{children}</div>;
};
