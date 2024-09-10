// export default function TabButton(props) {
export default function TabButton({ children, onSelect }) {
  // function handleClick() {
  //   console.log("Hello");
  // }
  return (
    <li>
      {/* <button onClick={handleClick}>{props.children}</button> */}
      <button onClick={onSelect}>{children}</button>
      {/* .children of props (or use {children}) refer to content between <TabButton>Content</TabButton> */}
    </li>
  );
}
