import { cn } from "@/lib/utils";
import {
  tableClasses,
  tableHeaderClasses,
  tableHeadClasses,
  tableBodyClasses,
  tableRowClasses,
  tableCellClasses,
  tableFooterClasses,
} from "./Table.styles";

import type { FC } from "react";
import type {
  ITable,
  ITableHeader,
  ITableHead,
  ITableBody,
  ITableRow,
  ITableCell,
  ITableFooter,
} from "./table.types";

import "./Table.styles.scss";

export const Table: FC<ITable> = ({ className, ...props }) => {
  const combinedClasses = cn(tableClasses, className ?? "");

  return <table className={combinedClasses} {...props} />;
};

export const TableHeader: FC<ITableHeader> = ({ className, ...props }) => {
  const combinedClasses = cn(tableHeaderClasses, className ?? "");

  return <thead className={combinedClasses} {...props} />;
};

export const TableHead: FC<ITableHead> = ({ className, ...props }) => {
  const combinedClasses = cn(tableHeadClasses, className ?? "");

  return <th className={combinedClasses} {...props} />;
};

export const TableBody: FC<ITableBody> = ({ className, ...props }) => {
  const combinedClasses = cn(tableBodyClasses, className ?? "");

  return <tbody className={combinedClasses} {...props} />;
};

export const TableRow: FC<ITableRow> = ({ className, ...props }) => {
  const combinedClasses = cn(tableRowClasses, className ?? "");

  return <tr className={combinedClasses} {...props} />;
};

export const TableCell: FC<ITableCell> = ({ className, ...props }) => {
  const combinedClasses = cn(tableCellClasses, className ?? "");

  return <td className={combinedClasses} {...props} />;
};

export const TableFooter: FC<ITableFooter> = ({ className, ...props }) => {
  const combinedClasses = cn(tableFooterClasses, className ?? "");

  return <tfoot className={combinedClasses} {...props} />;
};
