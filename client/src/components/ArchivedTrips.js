import React, { Component } from "react"
import { connect } from "react-redux"

import Trip from "./Trip"
import { getArchivedTrips } from "../redux/actions/trips"
import { getTripsArray } from "../utils/selectors"

class ArchivedTrips extends Component {
  componentDidMount() {
    this.props.getArchivedTrips()
  }

  render() {
    const { trips } = this.props
    return (
      <div>
        {trips.length ? (
          trips.map(trip => <Trip key={trip.id} trip={trip} archived={true} />)
        ) : (
          <div>No archived trips!</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trips: getTripsArray(state)
})

const mapDispatchToProps = { getArchivedTrips }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchivedTrips)
