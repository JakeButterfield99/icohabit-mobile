import authAxios from "../axios";

const CreateHome = (name: string) => {
    return authAxios.post('home/create', {
        name: name,
    });
}

const GetInvites = () => {
    return authAxios.get('home/invites');
}

const GetInviteCode = () => {
    return authAxios.get('home/invite/code');
}

const InviteMember = (code: string) => {
    return authAxios.post('home/invite', {
        code: code,
    });
}

const JoinHome = (home_id: number) => {
    return authAxios.post('home/join', {
        home_id: home_id,
    });
}

export default {
    CreateHome,
    GetInvites,
    GetInviteCode,
    InviteMember,
    JoinHome,
}