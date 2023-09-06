import {PageTitle} from "@/components/page/PageTitle";
import {SearchOptions, UserSearchOptions} from "@/components/user/UserSearchOptions";
import {UserList} from "@/components/user/UserList";

export default function Page() {
    return (
        <>
            <PageTitle title={'사용자'}/>
            <UserSearchOptions onOptionsChanged={(e:SearchOptions) => console.log('onOptionsChanged')}></UserSearchOptions>
            <UserList></UserList>
        </>
    );
}
