DROP TABLE items;
CREATE TABLE items (
    id serial primary key,
    name varchar(50),
    owner_name varchar(50),
    owner_mailaddress varchar(50),
    release_date date,
    inserttime timestamp without time zone,
    updatetime timestamp without time zone,
    available boolean default true
);