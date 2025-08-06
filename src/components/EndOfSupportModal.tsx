import $ from 'jquery'
import { useEffect } from 'react'

function EndOfSupportModal() {
  useEffect(() => {
    $('#end-of-support').modal('show')
  }, [])

  return (
    <div id="end-of-support" className="modal fade" role="dialog" tabIndex={1}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex flex-column align-items-center">
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>

            <h1 className="modal-title text-center">⚠️ End of Support ⚠️</h1>
          </div>

          <div className="modal-body text-center">
            <p className="h5">
              Due to the sunset of <strong>Marvel's public API</strong>, this project no longer
              works properly and is not receiving further updates.
            </p>

            <p className="h5">
              Consider viewing other projects in <strong>juliolmuller</strong>'s{' '}
              <a href="https://github.com/juliolmuller">portfolio</a>.
            </p>
          </div>

          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-marvel rounded-0" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndOfSupportModal
