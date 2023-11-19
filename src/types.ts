/*
    User Types
*/

export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    email_verified_at: string,
    profile_pic: string,
    created_at: Date,
    home: Home,
}


/*
    Home Types
*/

export type Home = {
    id: number,
    name: string,
    address?: string,
    latlng?: string,
    users?: User[],
    created: Date,
}

export type HomeInviteCode = {
    invite_id: string,
    user: User,
    code: string,
    expires: Date,
    created: Date,
}

export type HomeInvite = {
    invite_id: string,
    home: Home,
    invited: User,
    invited_by: User,
}



/*
    Shopping Types
*/

export type List = {
    id: number,
    name: string,
    category: string,
    home_id?: number,
    user_id?: number,
    created_at: string,
    last_refresh: Date,
    entries: { [item_id: number]: ListEntry },
}

export type ListEntry = {
    item_id: number,
    list_id: number,
    quantity: number,
    checked: boolean,
    created_at: string,
    item?: ListItem,
}

export enum ListItemType {
    LOCAL = 'local',
    SERVER = 'server',
}

export type ListItem = {
    id: number,
    name: string,
    category: string,
    visible: string,
    user_id: number,
    created_at: string,
    type: ListItemType,
}

export type ListAction = {
    user_id: number,
    list_id: number,
    operation: string,
    item_id: number,
    item_name: string,
}

export enum ListOperation {
    ADD_ITEM = 'add',       // add item to list
    REMOVE_ITEM = 'remove', // remove item from list
    CHECK_ITEM = 'check',   // check off an item
    CREATE_ITEM = 'create', // create item
    UPDATE_ITEM = 'update', // update local item with server
}

/*
    Food Planner Types
*/

export type Meal = {
    meal_id: string,
    name: string,
    method: string[],
    public: boolean,
    ingredients: MealIngredient[],
    time: number,
    user: User,
    created: Date,
}

export type Ingredient = {
    ingredient_id: string,
    name: string,
    category: string,
    public: boolean,
    user: User,
    list_item?: ListEntry,
    created: Date,
}

export type MealIngredient = {
    meal_ingredient_id: string,
    ingredient: Ingredient,
    amount: number,
    unit: string,
}

export type DayPlanner = {
    day_plan_id: string,
    breakfast?: Meal,
    lunch?: Meal,
    dinner?: Meal,
    user: User,
}

export type WeekPlanner = {
    week_planner_id: string,
    name: string,
    mon: DayPlanner,
    tues: DayPlanner,
    wed: DayPlanner,
    thurs: DayPlanner,
    fri: DayPlanner,
    sat: DayPlanner,
    sun: DayPlanner,
    visible: string,
    home?: Home,
    user?: User,
    created: Date,
}



/*
    Calendar Types
*/

export type Calendar = {
    calendar_id: string,
    name: string,
    category: string,
    events: Event[],
    home?: Home,
    user?: User,
    created: Date,
}

export type Event = {
    event_id: string,
    name: string,
    date: Date,
    address: string,
    home?: Home,
    user?: User,
    attendees: EventJoin[],
    created: Date,
}

export type EventJoin = {
    event_join_id: string,
    user: User,
    joined: Date,
}



/*
    Jobs Rota Types
*/

export type Rota = {
    rota_id: string,
    name: string,
    visible: string,
    user?: User,
    home?: Home,
    tasks: TaskManager[],
    created: Date,
}

export type Task = {
    task_id: string,
    name: string,
    time: number,
    visible: string,
    user?: User,
}

export type TaskManager = {
    task_manager_id: string,
    task: Task,
    user?: User,
    due: Date,
    time: number,
    complete: boolean,
    created: Date,
}



/*
    Admin Types
*/

export type History = {
    history_id: string,
    home?: Home,
    user?: User,
    event: string,
    date: Date,
}

export type Notification = {
    notification_id: string,
    user: User,
    content: string,
    date: Date,
    seen: boolean,
    event?: Event,
    task?: TaskManager,
}



/*
    Pinboards Types
*/

export type Pinboard = {
    pinboard_id: string,
    desc: string,
    category: string,
    avatar_url: string,
    notes?: Note[],
    created: Date,
}

export type NoteCategory = {
    note_category_id: string,
    name: string,
}

export type Note = {
    note_id: string,
    category: NoteCategory,
    header: string,
    content: string,
    user: User,
    attachments: NoteAttachment[],
    likes: NoteLike[],
    created: Date,
}

export type NoteAttachment = {
    note_attachment_id: string,
    type: string,
    url: string,
    user: User,
}

export type NoteLike = {
    user: User,
    created: Date,
}



/*
    IOU types
*/

export type IOU = {
    iou_id: string,
    requestor: User,
    debtor: User,
    amount: number,
    desc: string,
    due: Date,
    paid: boolean,
    created: Date,
}



/*
    Deals types
*/

export type Deal = {
    deal_id: string,
    name: string,
    desc: string,
    company: string,
    eligible: boolean,
    created: Date,
    expires: Date,
}



/*
    Ice Breakers
*/

export type Question = {
    question_id: string,
    question: string,
    category: QuestionCategory,
}

export type QuestionCategory = {
    category: string,
}