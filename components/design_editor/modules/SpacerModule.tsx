import React from "react";
// react-bootstrap
import { Row, Table } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function SpacerModule(props: any) {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);

  return (
    <div>
      <Table borderless>
        <tbody>
          <tr>
            <td style={{ padding: `${state.spacerProperties.height}px` }}></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SpacerModule;
