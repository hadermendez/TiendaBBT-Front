import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'; // Ejemplo de íconos
import Disponibles from '../components/Disponibles';

const tabs = [
  { name: 'Disponibles', icon: CheckCircleIcon, current: true },
  { name: 'Agotados', icon: XCircleIcon, current: false },
];
export default function Productos() {
  // const [selectedTab, setSelectedTab] = useState('Disponibles');
  const [selectedTab, setSelectedTab] = useState(tabs.find(tab => tab.current).name);


  function handleTabClick(tabName) {
    setSelectedTab(tabName);
    tabs.forEach(tab => {
      tab.current = (tab.name === tabName);
    });
  }

  const handleTabChange = (event) => {
    const tabName = event.target.value;
    setSelectedTab(tabName);
    // Actualiza el estado 'current' de cada tab, si es necesario
    tabs.forEach(tab => {
      tab.current = (tab.name === tabName);
    });
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          onClick={handleTabChange}
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
 
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </button>
            ))}
            
          </nav>
        </div>
      </div>
      {/* Contenido del tab seleccionado */}
      {selectedTab === 'Disponibles' && <Disponibles disponible={1} />}
      {selectedTab === 'Agotados' && <Disponibles disponible={0} />}
    </div>
  );
}
