import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Settings, User } from "lucide-react";

interface UserProfileProps {
  showName?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ showName = true }) => {
  const { currentUser, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get user's initials for avatar fallback
  const getInitials = () => {
    if (currentUser.displayName) {
      return currentUser.displayName
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase();
    }
    return currentUser.email?.substring(0, 2).toUpperCase() || 'U';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border border-violet-200">
            <AvatarImage src={currentUser.photoURL || ''} alt={currentUser.displayName || ''} />
            <AvatarFallback className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
          {showName && currentUser.displayName && (
            <span className="ml-2 text-sm font-medium">{currentUser.displayName}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {currentUser.displayName || 'User'}
            </p>
            <p className="text-xs leading-none text-slate-500">
              {currentUser.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          disabled={isLoading} 
          onClick={handleLogout}
          className="text-red-600 focus:text-red-700"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isLoading ? 'Logging out...' : 'Log out'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
