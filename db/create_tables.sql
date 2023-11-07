drop table items;
drop table categories;

-- Categories
create table categories (
    id serial primary key,
    name varchar(50) not null unique,
    description text
);

insert into categories (name, description) values
    ('Electronics', 'Gadgets to make life easier.'),
    ('Car parts', 'Expensive stuff for the box with 4 wheels.'),
    ('Sports', 'Get out and play!'),
    ('Video Games', 'Stay in and play');

-- Items
create table items(
    id serial primary key,
    name varchar(200) not null,
    description text not null,
    category_id integer not null,
    foreign key (category_id) references categories (id)
);

