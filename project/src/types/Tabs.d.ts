/**
 * Элемент вкладки
 */
import {JSXElementConstructor} from 'react';

export type TabItem = {
  id: string;
  title: string;
}

/**
 * Элемент вкладки
 */
export type TabItemProps = TabItem & {
  className?: string;
  onSelect: (id: string) => void;
}

/**
 * Парамерты для вкладок фильма
 */
export type TabsProps = JSXElementConstructor & {
  className?: string;
}

