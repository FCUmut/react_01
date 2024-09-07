export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
      {/* .children of props (or use {children}) refer to content between <TabButton>Content</TabButton> */}
    </li>
  );
}
