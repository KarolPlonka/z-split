import React from 'react';
import './SpinningCoin.scss';

interface SpinningCoinProps {
  value?: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const SpinningCoin: React.FC<SpinningCoinProps> = ({
  value,
  size = 'medium',
  className = ''
}) => {
  return (
    <div className={`coin-animation ${className}`}>
      <div className={`coin-frame coin-frame--${size}`} />
      {value !== undefined && (
        <span className="coin-value">{value}</span>
      )}
    </div>
  );
};
