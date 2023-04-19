export interface Specification {
  id: number;
  title: string;
  status: string;
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
