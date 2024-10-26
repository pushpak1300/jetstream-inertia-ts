export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    current_team_id: number;
    profile_photo_path?: string | null;
    created_at: string;
    updated_at: string;
    two_factor_confirmed_at?: string | null;
    profile_photo_url: string;
    current_team: CurrentTeam;
    all_teams: CurrentTeam[];
    two_factor_enabled: boolean;
    membership: Membership;
}

export interface Membership {
    team_id: number;
    user_id: number;
    role: string;
    created_at: string;
    updated_at: string;
}

export interface CurrentTeam {
    id: number;
    user_id: number;
    name: string;
    personal_team: boolean;
    created_at: string;
    updated_at: string;
}

export interface Team {
    id: number;
    user_id: number;
    name: string;
    personal_team: boolean;
    created_at: string;
    updated_at: string;
    owner: User;
    users: User[];
    team_invitations: any[];
}

export interface Jetstream {
    canCreateTeams: boolean;
    canManageTwoFactorAuthentication: boolean;
    canUpdatePassword: boolean;
    canUpdateProfileInformation: boolean;
    hasEmailVerification: boolean;
    flash: Record<string, string>[] | null;
    hasAccountDeletionFeatures: boolean;
    hasApiFeatures: boolean;
    hasTeamFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    managesProfilePhotos: boolean;
}

export interface Role {
    key: string;
    name: string;
    description: string;
    permissions: string[];
}

export interface Permissions {
    canAddTeamMembers: boolean;
    canDeleteTeam: boolean;
    canRemoveTeamMembers: boolean;
    canUpdateTeam: boolean;
    canUpdateTeamMembers: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    errors: Record<string, any>;
    jetstream: Jetstream;
    auth: {
        user: User;
    };
    errorBags: any[];
    confirmsTwoFactorAuthentication?: boolean;
    sessions: any[];
    teams: Team[];
    availableRoles: Role[];
    permissions: Permissions;
    defaultPermissions: string[];
    availablePermissions: string[];
};
