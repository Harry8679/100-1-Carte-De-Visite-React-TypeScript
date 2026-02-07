import { StatusBadgeProps } from '../types';

export const StatusBadge = ({ available }: StatusBadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <span
          className={`inline-block w-3 h-3 rounded-full ${
            available ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
        {available && (
          <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
        )}
      </div>
      <span
        className={`text-sm font-medium ${
          available ? 'text-green-600' : 'text-gray-500'
        }`}
      >
        {available ? 'Disponible pour des missions' : 'Actuellement occupé'}
      </span>
    </div>
  );
};