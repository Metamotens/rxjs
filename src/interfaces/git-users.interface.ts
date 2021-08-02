import { GitUser } from "./git-user.interface";

export interface GitUsers {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitUser[];
}
