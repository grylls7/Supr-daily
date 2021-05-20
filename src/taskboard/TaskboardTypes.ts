export interface TaskboardItem {
    id: string;
    title: string;
    description: string;
}

export enum TaskboardItemStatus {
    TO_DO = 'Teams',
    IN_PROGRESS = 'Products'
}
