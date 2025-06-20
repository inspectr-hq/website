import React from 'react';
import CopyButton from './CopyButton.jsx';

const Terminal = ({
  endpoint,
  command,
  prompt = 'computer:~$',
  showCopyButton = false,
  showCopyLabel = false,
  copyLabelText = 'Copy',
  copiedText = 'Copied'
}) => {
  const displayCommand = command || `curl -X GET ${endpoint || 'http://localhost:8080'}`;

  return (
    <div className="w-full mx-auto">
      <div
        className="coding inverse-toggle px-5 pt-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
                          bg-gray-800 pb-2 rounded-lg leading-normal overflow-hidden"
      >
        <div className="top mb-0 flex justify-between">
          <div className="flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          {showCopyButton && <CopyButton textToCopy={displayCommand} />}
        </div>
        <div className="mt-1 flex">
          <span className="text-green-400">{prompt}</span>
          <p className="flex-1 typing items-start pl-2 break-all">
            {displayCommand}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
