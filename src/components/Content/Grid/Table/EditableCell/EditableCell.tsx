import { useState } from "react";
import {
  CellContent,
  ContentEditor,
  EditableCellWrapper,
  TableCell,
} from "./EditableCell.styles";

interface IProps {
  onChange: (oldValue: string, newValue: string) => void;
  children: string;
}

const EditableCell = ({ onChange, children }: IProps) => {
  const [editable, setEditable] = useState<boolean>(false);

  const closeEditor: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setEditable(false);
    if (children !== event.target.value) onChange(children, event.target.value);
  };

  return (
    <TableCell
      className={editable ? "Editable" : ""}
      onClick={() => setEditable(true)}
    >
      <EditableCellWrapper>
        {editable ? (
          <ContentEditor
            autoFocus
            onBlur={closeEditor}
            defaultValue={children}
          />
        ) : (
          <CellContent title={children}>{children}</CellContent>
        )}
      </EditableCellWrapper>
    </TableCell>
  );
};

export default EditableCell;
