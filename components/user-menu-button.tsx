import { useState } from "react";
import UserButton from "@/components/user-button";
import Button from "@/components/primitives/button";
import { logoutUser } from "@/api/user";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/contexts/auth-context";

const UserMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { refreshUser } = useAuth();
  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <UserButton />
        {isOpen ? (
          <>
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-red-700 absolute top-12 right-0 w-32 z-50 rounded-b"
            >
              <Button
                color="red"
                fullWidth
                loading={loading}
                disabled={loading}
                onClick={async () => {
                  setLoading(true);
                  await logoutUser();
                  await refreshUser();
                  router.refresh();
                  setLoading(false);
                }}
              >
                Logout
              </Button>
            </div>
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full h-screen fixed top-0 left-0 z-40 cursor-default"
            ></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default UserMenuButton;
