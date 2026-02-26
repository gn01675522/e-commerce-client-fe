// 對應實際 RWD 尺寸
export enum RWD_VARIANTS {
  base = "base",
  small = "small",
  medium = "medium",
  large = "large",
}

export enum CLASS_SEGMENT {
  // 用來標示共通點的類別
  // e.g. 假設一個按鈕有三個種類，三種除了顏色不同之外，w / h 大小都是 160px、40px，那麼其 w / h 就會放在這
  // 而顏色就可以用以下 style 類別來標示
  base = "base",
  // 用來標示 padding、margin、寬高的類別
  structure = "structure",
  // 用來標示類似 flex、grid 等會影響內容排版以及佈局的類別
  layout = "layout",
  // 用來標示顏色、字體、字體顏色、陰影等不會影響組建佈局以及大小的類別
  style = "style",
  // 用來標示 focus、disabled、hover 等有狀態切換的類別
  behavior = "behavior",
}
