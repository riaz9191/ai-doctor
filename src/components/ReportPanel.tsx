import React from 'react';

interface ReportPanelProps {
  report: string;
}

const ReportPanel: React.FC<ReportPanelProps> = ({ report }) => {
  return (
    <div className="w-1/2 h-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Real-time Report</h2>
      <div className="prose dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{report}</p>
      </div>
    </div>
  );
};

export default ReportPanel;
