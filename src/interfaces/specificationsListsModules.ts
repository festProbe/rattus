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
  isShowSpecificationForm?: boolean;
}

export interface SpecificationsListsState {
  lists: SpecificationsList[];
  checkedLists: number[];
  needShowControlPanel: boolean;
  isShowListForm: boolean;
  selectedList: number;
}
