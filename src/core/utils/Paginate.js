class Paginate {

    constructor(req) {
        this.req = req;
        this.options = {};
        this.select = '';
        this.populate = '';
        this.sort = {};

        this.setOptions();
    }

    setOptions() {
        this.options = {
            select: this.select,
            limit: parseInt(this.req.query.limit, 10) || 10,
            page: parseInt(this.req.query.page, 10) || 1,
            populate: this.populate,
            sort: this.sort,
        };
    }

    getOptions() {
        return this.options;
    }

    setSelect(select) {
        this.select = select;
        this.setOptions();
    }

    setPopulate(populate) {
        this.populate = populate;
        this.setOptions();
    }

    setSort(sort) {
        this.sort = sort;
        this.setOptions();
    }

    /////PAGINATE-EXAMPLE-COMPLETE///////
    // const options = {
    //     select:   'title date author',
    //     sort:     { date: -1 },
    //     populate: 'author',
    //     lean:     true,
    //     offset:   20,
    //     limit:    10
    // };
}

module.exports = Paginate;