exports.paginate = async function(page, limit, filter, sort, model) {
  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    results.meta = {};
    const total = await model.countDocuments().exec();
    results.meta.Total_Data_in_database = total;
    if (endIndex < total) {
      results.meta.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.meta.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    // ** partial search
    if (filter) {
      samp = filter;
      const searchterms = Object.entries(samp);
      const query = searchterms.map(function(parti) {
        const reg = new RegExp(parti[1], 'i');
        return { [parti[0]]: reg };
      });
      partial = { $and: query };
    }
    if (!filter) partial = filter;
    // ***
    results.data = await model
      .find(partial)
      .sort(sort)
      .limit(limit)
      .skip(startIndex)
      .exec();
    return results;
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
