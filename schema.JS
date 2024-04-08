const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList } =
    graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt }

    })

});

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        codeimprove: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = [
                    { id: 12, name: 'codeimprove', email: 'code@mail.com', phone: '9898989898' },
                    { id: 13, name: 'demo', email: 'example@example.com', phone: '7098989898' }
                ];
                return data;
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootOuery})

