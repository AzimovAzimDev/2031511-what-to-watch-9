import {TabItem} from '../types/Tabs';

/**
 * Варианты табов
 */
export enum TABS {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

/**
 * Массив табов на страницы фильма
 */
export const tabs: TabItem[] = [
  {
    title: 'Overview',
    id: TABS.Overview,
  },
  {
    title: 'Details',
    id: TABS.Details,
  },
  {
    title: 'Reviews',
    id: TABS.Reviews,
  },
];
