import {PageTitle} from "@/components/page/PageTitle";
import {UserSearchOptions} from "@/components/user/UserSearchOptions";
import {UserList} from "@/components/user/UserList";

export default function Page() {
    return (
        <>
            <PageTitle title={'사용자'}/>
            <UserSearchOptions></UserSearchOptions>
            <UserList></UserList>
        </>
    );
}
