declare interface IImageMagnifierWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  Description: string;
  DescriptionFieldLabel: string;
  SmallImgUrlFieldLabel: string;
  SmallImgWidthFieldLabel: string;
  SmallImgHeightFieldLabel: string;
  LargeImgUrlFieldLabel: string;
  LargeImgWidthFieldLabel: string;
  LargeImgHeightFieldLabel: string;
  CursorOffsetXFieldLabel: string;
  CursorOffsetYFieldLabel: string;
  SizeFieldLabel: string;
}

declare module "ImageMagnifierWebPartStrings" {
  const strings: IImageMagnifierWebPartStrings;
  export = strings;
}
