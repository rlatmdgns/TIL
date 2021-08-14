# Refactoring

- 체크박스 리팩토링

    💩

    ```tsx
    const [checkNode, setCheckNode] = useState<number[]>([]);

      const handleAllCheck = (checked: boolean) => {
        if (!checked) {
          setCheckNode([]);
          return;
        }
        const nodeIdArray = nodes.map((node) => node.nodeId);
        setCheckNode(nodeIdArray);
      };
      const handleSingleCheck = (checked: boolean, nodeId: number) => {
        checked && setCheckNode([...checkNode, nodeId]);
        !checked && setCheckNode(checkNode.filter((el) => el !== nodeId));
      };
    ```

    ⭐

    ```tsx
    const [checkNode, setCheckNode] = useState<number[]>([]);

      const handleAllCheck = (checked: boolean) => {
        setCheckNode(getAllNodeId(checked));
      };
      const handleSingleCheck = (checked: boolean, nodeId: number) => {
        setCheckNode(getNodeId(checked, checkNode, nodeId));
      };
      function getAllNodeId(checked: boolean): number[] {
        if (!checked) return [];
        return nodes.map((id) => id.nodeId);
      }
      function getNodeId(
        checked: boolean,
        checkNode: number[],
        nodeId: number
      ): number[] {
        if (!checked) return checkNode.filter((id) => id !== nodeId);
        return [...checkNode, nodeId];
      }
    ```