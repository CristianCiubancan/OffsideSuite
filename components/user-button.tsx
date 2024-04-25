import { useAuth } from "@/components/contexts/auth-context";
export const turnNameToHexColor = (name: string, secondary: boolean) => {
  const str = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), "");
  if (secondary) {
    return `#${str.slice(6, 12)}`;
  }
  return `#${str.slice(0, 6)}`;
};

const UserButton = () => {
  const { user } = useAuth();
  return user ? (
    <div className="flex justify-center w-16 cursor-pointer">
      <div
        className="flex items-center justify-center p-2 w-8 h-8 rounded-full text-white font-bold border-2"
        style={{
          borderColor: turnNameToHexColor(user.firstName + user.lastName, true),
          backgroundColor: turnNameToHexColor(
            user.firstName + user.lastName,
            false
          ),
          color: turnNameToHexColor(user.firstName + user.lastName, true),
          fontSize: user.nickname ? "12px" : "6px",
        }}
      >
        {user.nickname
          ? `${user.nickname.slice(0, 1).toUpperCase()}`
          : `${user.firstName.slice(0, 1).toUpperCase()} ${user.lastName
              .slice(0, 1)
              .toUpperCase()}`}
      </div>
    </div>
  ) : null;
};

export default UserButton;
