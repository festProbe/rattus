export interface Specification {
  id: number;
  text: string;
}

export interface SpecificationsList {
  id: number;
  listName: string;
  specifications: Specification[];
}

export interface SpecificationsListsState {
  lists: SpecificationsList[]
}
