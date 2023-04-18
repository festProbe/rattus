export interface Specification {
  id: number;
  title: string;
  done: boolean;
  comment: string;
}

export interface SpecificationsList {
  id: number;
  name: string;
  specifications: Specification[];
}

export interface SpecificationsListsState {
  lists: SpecificationsList[],
  checkedLists: number[],
  needShowChangeName: boolean,
  needShowControlPanel: boolean
}
