import { User } from "../data/index.js"
import { errors, validate } from "com"

const { MatchError, SystemError } = errors;

function retrieveUser(userId, targetUserId){

    validate.id(userId, "userId");
    validate.id(targetUserId, "targetUserId");

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if(!user) 
                throw new MatchError("user not found");

            return User.findById(targetUserId).select("-_id -__v -password").lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(targetUserId => {
                    if(!targetUserId)
                        throw new MatchError("target user not found");

                    return targetUserId;
                })
        })
}

export default retrieveUser;
