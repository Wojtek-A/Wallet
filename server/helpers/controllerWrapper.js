const controllerWrapper = (controller) => {
    return async (req, res, next) => {
        try {
            return await controller(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export {controllerWrapper}
