import React from 'react';
import './DungeonSeparator.scss';

export const DungeonSeparator: React.FC = () => {
  return (
    <div className="dungeon-separator">
      <div className="dungeon-separator__line" />
      <div className="dungeon-separator__rune" />
      <div className="dungeon-separator__particles" />
    </div>
  );
};
