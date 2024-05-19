const Admin = ({ fill = "" }: { fill?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47997 18.15C3.50997 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50997 6.41999 4.47997 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke={fill ? fill : "#939393"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 11.0001C13.2868 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2868 6.34009 12 6.34009C10.7132 6.34009 9.66998 7.38322 9.66998 8.67004C9.66998 9.95687 10.7132 11.0001 12 11.0001Z" stroke={fill ? fill : "#939393"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601" stroke={fill ? fill : "#939393"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
export default Admin;