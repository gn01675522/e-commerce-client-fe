export interface IIndicator {
  totalCount: number;
  targetNum: number;
  onChangeImg: (i: number) => void;
  containerClass?: string;
}
