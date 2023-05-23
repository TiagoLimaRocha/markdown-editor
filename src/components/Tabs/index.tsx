import { FC, useState } from 'react';

interface TabsProps {
  children: JSX.Element[];
}

export const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const setTabId = (id: string) => window.localStorage.setItem('tabId', id);

  const handleClick = (id: string, label: string) => {
    setActiveTab(label);
    setTabId(id);
  };

  return (
    <div>
      <div>
        {children.map((child) => {
          const { label, n } = child.props;
          const tabId = `markdown-tab-${n}`;

          return (
            <button onClick={() => handleClick(tabId, label)} key={label}>
              {label}
            </button>
          );
        })}
      </div>

      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
